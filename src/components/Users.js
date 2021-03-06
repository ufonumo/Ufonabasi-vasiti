import React from 'react';
import EllipseOne from '../assets/Ellipse 22.svg'
import EllipseTwo from '../assets/Ellipse 23.svg'
import EllipseThree from '../assets/Ellipse 24.svg'
import EllipseFour from '../assets/Ellipse 25.svg'
import EllipseFive from '../assets/Ellipse 26.svg'
import EllipseSix from '../assets/Ellipse 27.svg'

export default function Users() {

    const userData = [
        {
            name: `Joseph Ike `,
            type: 'CUSTOMER',
            location: 'In Ikeja',
            image: EllipseOne,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },
        {
            name: `Adetola Fashina `,
            type: 'CUSTOMER',
            location: 'Ibadan',
            image: EllipseTwo,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Emmanuel Fayemi `,
            type: 'CUSTOMER',
            location: 'In Akoka',
            image: EllipseThree,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Chisom Obilor `,
            type: 'VENDOR',
            location: 'In Magodo',
            image: EllipseFour,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Adunoluwa Adeyemi `,
            type: 'VENDOR',
            location: 'In Ikeja',
            image: EllipseFive,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Chidi Okeke `,
            type: 'VENDOR',
            location: 'In Ikeja',
            image: EllipseSix,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  
    ]

    return (
        <div>
            <section className="users container">
                <div className="row ">
                    {userData.map((list, index) =>(
                        <div className="col-lg-4 user_list" key={index}>
                            <div className="image">
                                <img src={list.image} alt="profile images"/>
                            </div>
                            <h6>{list.name}</h6>
                            <div className="user_location">
                                <p>{list.location}</p>
                                <p className='user_type'>{list.type}</p>
                            </div>
                            <p>{list.description}</p>
                        </div>
                    ))}
                    
                </div>
            </section>
        </div>
    )
}
