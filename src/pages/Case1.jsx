import React from 'react'
import fruits from '../components/Case1Material.ts'
import { Container, Row, Col } from 'react-bootstrap';


const Case1 = () => {

    // 1. Buah apa saja yang dimiliki Andi? (fruitName) 
    const allFruitNames = fruits.reduce((acc, fruit) => {
        if (!acc.includes(fruit.fruitName)) {
            acc.push(fruit.fruitName);
        }
        return acc;
    }, []);

    // 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
    const separatedFruits = fruits.reduce((acc, fruit) => {
        if (!acc[fruit.fruitType]) {
            acc[fruit.fruitType] = [];
        }
        acc[fruit.fruitType].push(fruit);
        return acc;
    }, {});

    const numberOfContainers = Object.keys(separatedFruits).length;

    // 3. Berapa total stock buah yang ada di masing-masing wadah?
    const totalStockPerContainer = {};
    for (const type in separatedFruits) {
        totalStockPerContainer[type] = separatedFruits[type].reduce(
            (total, fruit) => total + fruit.stock,
            0
        );
    }


    return (
        <Container className='w-75 my-4' >

            <Row>
                <span className='fw-bold text-center' style={{ fontSize: 30 }} >Case 1</span>
            </Row>

            <hr />

            <>
                <span className='fw-bold'>1. Buah yang dimiliki Andi:</span>
                <p>{allFruitNames.join(', ')}</p>
            </>

            <hr />

            <>
                <span className='fw-bold'>2. Jumlah wadah yang dibutuhkan:</span>
                <p>{numberOfContainers}</p>
            </>

            <hr />

            <>
                <span className='fw-bold'>3. Buah di setiap wadah:</span>
                <Row>
                    {Object.keys(separatedFruits).map((type) => (

                        <Col className='my-2'>
                            <span>{type}:</span>

                            <div style={{ height: 130 }}>
                                <ul>
                                    {separatedFruits[type].map((fruit) => (
                                        <li key={fruit.fruitId}>{fruit.fruitName}</li>
                                    ))}
                                </ul>
                            </div>

                            <p>Total stock: {totalStockPerContainer[type]}</p>
                        </Col>
                    ))}
                </Row>
            </>

            <hr />

            <span className='fw-bold'>4. Komentar:</span>
            <p>
                Untuk Data Array Fruits Terdapat Beberapa Nama Yang sama pada FruitName Namun Memiliki Pemetaan Huruf Yang berbeda. yang dimana ketika digabungkan langsung menggunakan contoh sintaks seperti ini :
                <br />
                fruit map
                li key= index fruit.fruitName
                <br />
                maka yang tampil akan menjadi 2x menjadi seperti ini :
                <br />
                Apel, Kurma, apel, Manggis, Jeruk Bali, KURMA, Salak
                <br />
                <br />
                sehingga harus menggunakan fungsi reduce serta kondisi agar tidak terjadi duplikasi data

            </p>

            <hr />

        </Container>
    )
}

export default Case1