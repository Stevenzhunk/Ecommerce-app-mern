import Layout from '../components/Layout';

/*eslint-disable*/
const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="../images/policy.png"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <p>
            BY ACCESSING OR USING OUR SERVICES, YOU CONSENT TO THE COLLECTION,
            TRANSFER, MANIPULATION, STORAGE, DISCLOSURE AND OTHER USES OF YOUR
            INFORMATION (COLLECTIVELY, 'USE OF YOUR INFORMATION') AS DESCRIBED
            IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH OR CONSENT TO THIS
            PRIVACY POLICY YOU MAY NOT ACCESS OR USE OUR SERVICES. CHILDRENS
            PRIVACY Lorem Ipsum does not knowingly collect personally
            identifiable information (PII) from persons under the age of 13.
          </p>
        </div>
      </div>
    </Layout>
  );
  /*eslint-enable*/
};

export default Policy;
