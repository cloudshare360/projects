import React, { Component } from 'react';
import aboutData from "./companyData.json";
import '../../global.css';
import styled from 'styled-components';

const nav = styled.div`
background: #101522;
margin-left: 1%;
`
export default class counsulting extends Component {
    render() {
        return (
            <nav>
                <h2>{aboutData.company[1].heading}</h2>
                <ul>
                    <li>{aboutData.company[1].Data1}</li>
                    <li>{aboutData.company[1].Data2}</li>
                    <ul>
                        <li>{aboutData.company[1].Data3}</li>
                        <li>{aboutData.company[1].Data4}</li>
                        <li>{aboutData.company[1].Data5}</li>
                    </ul>
                    <li>{aboutData.company[1].Data6}</li>
                </ul>
            </nav>
        )
    }
}