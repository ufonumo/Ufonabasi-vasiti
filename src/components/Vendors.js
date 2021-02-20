import React from 'react';
import EllipseOne from '../assets/Ellipse 27.svg'
import EllipseTwo from '../assets/Ellipse 28.svg'
import EllipseThree from '../assets/Ellipse 29.svg'
import EllipseFour from '../assets/Ellipse 30.svg'
import EllipseFive from '../assets/Ellipse 31.svg'
import EllipseSix from '../assets/Ellipse 32.svg'

export default function Vendors() {

    const vendorData = [
        {
            name: `Temi Obadofin `,
            type: 'VENDOR',
            image: EllipseOne,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },
        {
            name: `Promise Ejiofor `,
            type: 'VENDOR',
            image: EllipseTwo,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Feyisola Arinola `,
            type: 'VENDOR',
            image: EllipseThree,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Karen Ibeh `,
            type: 'VENDOR',
            image: EllipseFour,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Oluchi Uzo `,
            type: 'VENDOR',
            image: EllipseFive,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  {
            name: `Amos Okafor `,
            type: 'VENDOR',
            image: EllipseSix,
            description: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
        },  
    ]

    return (
        <div>
            <section className="users container">
                <div className="row ">
                    {vendorData.map((list, index) =>(
                        <div className="col-lg-4 user_list" key={index}>
                            <div className="image">
                                <img src={list.image} alt="profile images"/>
                            </div>
                            <h6>{list.name}</h6>
                            <p className='vendor_type'>{list.type}</p>
                            <p>{list.description}</p>
                        </div>
                    ))}
                    
                </div>
            </section>
        </div>
    )
}
