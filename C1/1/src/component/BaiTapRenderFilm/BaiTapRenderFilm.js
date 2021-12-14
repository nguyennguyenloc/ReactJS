import React, { Component } from "react";
import DataFilms from "../Data/DataFilms.json";

export default class BaiTapRenderFilm extends Component {
  listFilm = DataFilms;
  renderList = () => {
    let listFilm = this.listFilm.map((film, index) => {
      return (
        <div className="col-3" key={index}>
          <div
            className="card text-white bg-primary ml-5 mt-2"
            style={{ width: "250px" }}
          >
            <img
              className="card-img-top"
              style={{ width: "250px", height: "350px" }}
              src={film.hinhAnh}
              alt={film.tenPhim}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ fontSize: "17px" }}>
                {film.tenPhim}
              </h4>
              <p
                className="card-text"
                styke={{ fontSize: "13px", height: "50px" }}
              >
                {film.moTa.length > 80 ? (
                  <p>{film.moTa.substring(0, 80)}...</p>
                ) : (
                  <p>{film.moTa}</p>
                )}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return listFilm;
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./background/avenger.jpg)`,
          minHeight: "800px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, .5)", minHeight: "800px" }}
        >
          <nav
            className="navbar navbar-expand-sm navbar-dark "
            style={{ backgroundColor: "rgba(87,83,119, .8)" }}
          >
            <a className="navbar-brand" href="ok">
              CYBERLEARN MOVIE
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="okcollapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="ok">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ok">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="ok"
                    id="dropdownId"
                    data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="ok">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="ok">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid mt-5">
            <div className="row">{this.renderList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
