import React from 'react'
import { Container, Row } from 'react-bootstrap';
import comments from '../components/Case2Material.ts'



const Case2 = () => {

    const countTotalComments = (comments) => {
        let totalCount = comments.length;
    
        comments.forEach((comment) => {
            if (comment.replies) {
                totalCount += countTotalComments(comment.replies);
            }
        });
    
        return totalCount;
    };

    return (
        <Container className='w-75 my-4' >

            <Row>
                <span className='fw-bold text-center' style={{ fontSize: 30 }} >Case 2</span>
            </Row>

            <hr />

            <>
                <span className='fw-bold'>Total Comments:</span>
                <p>{countTotalComments(comments)}</p>
            </>

            <hr />

        </Container>
    )
}

export default Case2