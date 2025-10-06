// // // src/components/HistorySection.jsx
// import React from "react";
// import "./HistorySection.css";

// const HistorySection = () => {
//   const history = [
//     {
//       year: "1987",
//       title: "Open my Farm",
//       desc: "Corrupti ut consequatur magni minus lusto eos consectetur similique minus culpa odio temporibus."
//     },
//     {
//       year: "1995",
//       title: "Farm Remodelacion",
//       desc: "Majority have suffered alteration in some form by injected humor culpa odio temporibus."
//     },
//     {
//       year: "2000",
//       title: "Grainfarmers Formed",
//       desc: "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit."
//     },
//     {
//       year: "1910",
//       title: "Start of Agriculture",
//       desc: "Consequatur magni Corrupti ut minus! Lusto eos consectetur similique minus culpa odio temporibus."
//     }
//   ];

//   return (
//     <section className="history-section">
//       {/* Top Content */}
//       <div className="history-header">
//         <span className="tag">Our History</span>
//         <h2>
//           Farming have been since <br /> 1866
//         </h2>
//         <p>
//           There are many variations of passages of Lorem Ipsum available, but
//           the majority have suffered alteration in some form, by injected
//           humour, or randomised words which don't look even.
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="timeline">
//         {history.map((item, index) => (
//           <div className="timeline-item" key={index}>
//             <h3 className="year">{item.year}</h3>
//             <div className="dot"></div>
//             <h4>{item.title}</h4>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HistorySection;









import React from "react";
import "./HistorySection.css";

const HistorySection = () => {
  const history = [
    {
      year: "1987",
      title: "Open my Farm",
      desc: "Corrupti ut consequatur magni minus lusto eos consectetur similique minus culpa odio temporibus."
    },
    {
      year: "1995",
      title: "Farm Remodelacion",
      desc: "Majority have suffered alteration in some form by injected humor culpa odio temporibus."
    },
    {
      year: "2000",
      title: "Grainfarmers Formed",
      desc: "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit."
    },
    {
      year: "1910",
      title: "Start of Agriculture",
      desc: "Consequatur magni Corrupti ut minus! Lusto eos consectetur similique minus culpa odio temporibus."
    }
  ];

  return (
    <section className="history-section">
      {/* Top Content */}
      <div className="history-header">
        <span className="tag">Our History</span>
        <h2>
          Farming have been since <br /> 1866
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="line"></div>
        {history.map((item, index) => (
          <div className="timeline-item" key={index}>
            <h3 className="year">{item.year}</h3>
            <div className="dot"></div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;








