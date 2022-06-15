import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../component/status-card/StatusCard'

import Table from '../component/table/Table'

import Badge from '../component/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Store Customers',
        data: [150, 200, 70, 80, 40, 75, 40, 51,20, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Janv', 'Fevr', 'Mar', 'Avr', 'May', 'Juin', 'Juil', 'Auo', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'Client',
        'Poids',
        'Montant'
    ],
    body: [
        {
            "Client": "Ali Fraj",
            "TotalePoids": "107 kg",
            "Montant": "52dt"
        },
        {
            "Client": "Fawzi nahali",
            "TotalePoids": "102 kg",
            "Montant": "51dt"
        },
        {
            "Client": "Nizar nakouaa",
            "TotalePoids": "89 kg",
            "Montant": "43dt"
        },
        {
            "Client": "Hichem korkobi",
            "TotalePoids": "72 kg",
            "Montant": "36dt"
        },
        {
            "Client": "Laila abdi",
            "TotalePoids": "60 kg",
            "Montant": "29dt"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.Client}</td>
        <td>{item.TotalePoids}</td>
        <td>{item.Montant}</td>
    </tr>
)

const latestOrders = {
    header: [
        "id_ordre",
        "Client",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "23 May 2022",
            price: "120dt",
            status: "payé"
        },
        {
            id: "#OD1712",
            user: "Samir morri",
            date: "11 fevr 2022",
            price: "80dt",
            status: "impayé"
        },
        {
            id: "#OD1713",
            user: "Talel tlijani",
            date: "27 Janv 2022",
            price: "65dt",
            status: "payé"
        },
        {
            id: "#OD1712",
            user: "Mohamed ammar",
            date: "23 Dec 2021",
            price: "115dt",
            status: "payé"
        },
        {
            id: "Hedi zbeda",
            user: "anthony baker",
            date: "27 Nov 2021",
            price: "75dt",
            status: "impayé"
        }
    ]
}

const orderStatus = {
    "payé": "primary",
    "pending": "warning",
    "paid": "success",
    "impayé": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    //const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Meilleurs clients</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Voir tout</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Dernières commandes</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Voir tout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
