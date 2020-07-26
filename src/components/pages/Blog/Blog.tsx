import React from 'react';
import { Button } from 'components/basic';

export interface BlogProps {
  /** Example Blog property. */
  exampleBlog?: string;
}

/**
 * Blog page
 */
export const Blog: React.FC<BlogProps> = ({ ...props }) => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Compass Glass Blog</h1>
            <div className="blog-items-container">
              {/* Blog Item */}
              <div className="blog-item">
                <header>
                  <h2>EnviroTherm Brochure</h2>
                  <span className="blog-item-meta">
                    <time>26 July, 2020</time>
                  </span>
                </header>
                <section>
                  <p>
                    Introducing the EnviroTherm Range of Sealed Insulated Double
                    Glazing combining 24/7/52 Thermal Efficiency and optimum
                    Indoor Comfort.
                  </p>
                  <p>
                    <Button
                      redirect="/brochure-compass-glass-envirotherm.pdf"
                      buttonClass=""
                      linkTarget="_blank"
                    >
                      View Brochure
                    </Button>
                  </p>
                </section>
              </div>
              {/* Blog Item */}
              <div className="blog-item">
                <header>
                  <h2>EnviroSol Brochure</h2>
                  <span className="blog-item-meta">
                    <time>26 July, 2020</time>
                  </span>
                </header>
                <section>
                  <p>
                    Introducing the EnviroSol Range of Solar Control Laminated
                    Glass combining excellent light transmission and solar
                    control.
                  </p>
                  <p>
                    <Button
                      redirect="/brochure-compass-glass-envirosol.pdf"
                      buttonClass=""
                      linkTarget="_blank"
                    >
                      View Brochure
                    </Button>
                  </p>
                </section>
              </div>
              {/* Blog Item */}
              <div className="blog-item">
                <header>
                  <h2>EnviroCoat Brochure</h2>
                  <span className="blog-item-meta">
                    <time>26 July, 2020</time>
                  </span>
                </header>
                <section>
                  <p>
                    Introducing the EnviroCoat Range of Multi-coloured Organic
                    Painted Glass for Interior Design Excellence.
                  </p>
                  <p>
                    <Button
                      redirect="/brochure-compass-glass-envirocoat.pdf"
                      buttonClass=""
                      linkTarget="_blank"
                    >
                      View Brochure
                    </Button>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
