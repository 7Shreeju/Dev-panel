import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
// import navigation from '../../../menu-items';
import { BASE_TITLE } from '../../../config/constant';
import { useAuth } from "../../.././store/auth";
// import AdminLayout from "../";

const Breadcrumb = () => {
  const location = useLocation();
  const [main, setMain] = useState([]);
  const [item, setItem] = useState([]);
  const { dynamicsidebarItems } = useAuth();

console.log(dynamicsidebarItems);

  useEffect(() => {

    dynamicsidebarItems.items.map((item, index) => {
      if (item.type && item.type === 'group') {
        getCollapse(item, index);
      }
      return false;
    });
  });
  const getCollapse = (item, index) => {
    if (item.children) {
      item.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse, index);
        } else if (collapse.type && collapse.type === 'item') {
          if (location.pathname === collapse.url) {
            setMain(item);
            setItem(collapse);
          }
        } else if (collapse.type && collapse.type === 'breadcrumb') {
          if (location.pathname === collapse.url) {
            setMain(item);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };
  let mainContent, itemContent;
  let breadcrumbContent = '';
  let title = '';
  if (main && main.type === 'collapse') {
    mainContent = (
      <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
        <Link to="#">{main.title}</Link>
      </ListGroup.Item>
    );
  }
  if (item && item.type === 'item') {
    title = item.title;
    itemContent = (
      <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
        <Link to="#">{title}</Link>
      </ListGroup.Item>
    );
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="bread-crumb-header">
                  <div className="page-header-title">
                    <h5 className="">{title}</h5>
                  </div>
                  <ListGroup as="ul" bsPrefix=" " className="breadcrumb">
                    <ListGroup.Item as="li" bsPrefix="" className="breadcrumb-item">
                      <Link to="/">Digihost</Link>
                    </ListGroup.Item>
                    <GoChevronRight />
                    {mainContent}
                    {itemContent}
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    document.title = title + BASE_TITLE;
  }
  if (item && item.type === 'breadcrumb') {
    title = item.title;
    itemContent = (
      <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
        <Link to="#">{title}</Link>
      </ListGroup.Item>
    );
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="bread-crumb-header">
                  <div className="page-header-title">
                    <h5 className="">{title}</h5>
                  </div>
                  <ListGroup as="ul" bsPrefix=" " className="breadcrumb">
                    <ListGroup.Item as="li" bsPrefix="" className="breadcrumb-item">
                      <Link to="/">Digihost</Link>
                    </ListGroup.Item>
                    <GoChevronRight />
                    {mainContent}
                    {itemContent}
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    document.title = title + BASE_TITLE;
  }
  return <React.Fragment>{breadcrumbContent}</React.Fragment>;
};

export default Breadcrumb;