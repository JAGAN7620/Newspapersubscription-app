import React from 'react'
import Navbar from './Navbar'

const ViewSubscribersPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">SI.No</th>
                                                    <th scope="col">Subscribers</th>
                                                    <th scope="col">Newspapers</th>
                                                    <th scope="col">language</th>
                                                    <th scope="col">periodicity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Sanoj</td>
                                                    <td>Daily Bugle</td>
                                                    <td>English</td>
                                                    <td>Weekly</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Tobey</td>
                                                    <td>The Hindu</td>
                                                    <td>English</td>
                                                    <td>Daily</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Biju</td>
                                                    <td>Malayala Manorama</td>
                                                    <td>Malayalam</td>
                                                    <td>Daily</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Preeti Zinda</td>
                                                    <td>Daily Sakal</td>
                                                    <td>Marathi</td>
                                                    <td>Daily</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Riyaz khan</td>
                                                    <td>Vijayavani</td>
                                                    <td>Kannada</td>
                                                    <td>Daily</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Hussain</td>
                                                    <td>Bartaman</td>
                                                    <td>Bengali</td>
                                                    <td>Daily</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td>Jagan</td>
                                                    <td>The Economic Times</td>
                                                    <td>English</td>
                                                    <td>Weekly</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>Evanjuline</td>
                                                    <td>Dainik Jagran</td>
                                                    <td>Hindi</td>
                                                    <td>Daily</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">9</th>
                                                    <td>Kamal H</td>
                                                    <td>Dina Thanthi</td>
                                                    <td>Tamil</td>
                                                    <td>Weekly</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">10</th>
                                                    <td>Sukumar</td>
                                                    <td>Mathrubhumi</td>
                                                    <td>Malayalam</td>
                                                    <td>Daily</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewSubscribersPage
