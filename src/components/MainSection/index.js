const MainSection = () => {
  return (
    <main>
      <div>
        <section id="top-info">
          <p class="slogan">
            SPECIALIZED MATH, ENGLISH, AND SCIENCE TUTORING FOR 4-8 GRADERS.
          </p>
          <h3 className="header-slogan">LEARN MORE. PAY LESS.</h3>
        </section>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column mt-auto justify-content-between">
                <h4 className="card-title">SUBJECTS</h4>
                <p className="card-text">
                  Explore the different subjects we offer: math, english,
                  science. We want to help students build a solid foundation
                  that will help foster their academic growth and beyond.
                </p>
                <a href="filter.html" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column mt-auto justify-content-between">
                <h4 className="card-title">SERVICES</h4>
                <p className="card-text">
                  We firmly believe learning should be affordable. We offer
                  affordable pricing across all subject matter. You will not
                  find better pricing with any other tutor service websites.
                </p>
                <a href="filter.html" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column mt-auto justify-content-between">
                <h4 className="card-title">TUTORS</h4>
                <p className="card-text">
                  All our tutors are well versed in all the subjects we offer.
                  Set up an initial appointment to speak with one of our tutors
                  today about how they can help your child with their
                  schoolwork.
                </p>
                <a href="filter.html" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column mt-auto justify-content-between">
                <h4 className="card-title">REVIEWS</h4>
                <p className="card-text">
                  See what others have to say about our service and tutors and
                  how we've made learning exciting. We are committed to
                  providing exceptional service of connecting students with
                  tutors.
                </p>
                <a href="filter.html" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
