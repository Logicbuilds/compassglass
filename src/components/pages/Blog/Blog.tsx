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
            <h1>Blog</h1>
            <div className="blog-item">
              <header>
                <h2>EnviroTheme Brochure</h2>
                <span className="blog-item-meta">
                  <time>26 July, 2020</time>
                </span>
              </header>
              <section>
                <p>
                  Introducing the ENVIROTHERM Range of Sealed Insulated Double
                  Glazing combining 24/7/52 Thermal Efficiency and optimum
                  Indoor Comfort.
                </p>
                <p>
                  <Button redirect="/about" buttonClass="">
                    View Brochure
                  </Button>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
