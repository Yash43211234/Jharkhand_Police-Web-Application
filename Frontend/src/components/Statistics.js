import React from "react";

// CSS styles as JavaScript object
const styles = {
  statisticsContainer: {
    margin: "50px auto",
    padding: "20px",
    width: "80%",
    border: "2px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#ffe6e6",
  },
  statistic: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    fontSize: "20px",
    color: "#ff1a1a",
  },
  statisticLabel: {
    fontWeight: "bold",
    display: "flex",
    padding: "1px",
    fontSize: "20px",
    color: "#ff0000",
  },

  body: {
    fontSize: "0px",
    backgroundColor: "#ff8080",
    color: "#cc0000",
  },

  title: {
    color: "#cc0000",
    fontSize: "30px",
    margin: "20px",
    padding: "10px",
    marginBottom: "20px",
  },
};

function Statistics() {
  const statisticsData = {
    DowryDeaths: "There have been incidents related to dowry deaths.",
    WitchDeaths: "Cases involving witchcraft-related violence have been recorded.",
    NaxalMurders:
      "Instances of violence related to Naxal activities have been reported.",
    GeneralMurders: "General murder cases have been investigated.",
    BankDacoities: "Incidents of bank robberies have been addressed.",
    RoadDacoities: "Robberies on roads have been investigated.",
    HouseDacoities:
      "Cases of robberies in residential premises have been handled.",
    BankRobberies: "Robberies specifically targeting banks have been reported.",
    RoadRobberies: "Robberies occurring on roads have been dealt with.",
    HouseRobberies: "Residential burglaries have been addressed.",
    Thefts: "Various theft cases have been investigated.",
    Riots: "Instances of civil unrest and riots have been managed.",
    KidnappingsforRansom: "Cases of kidnappings for ransom have been handled.",
    Kidnappings: "Other kidnapping cases have been investigated.",
    Rapes: "Instances of sexual assault have been reported.",
    ArmsActViolations:
      "Violations related to the Arms Act have been addressed.",
    ExplosivesActViolations:
      "Cases involving violations of the Explosives Act have been handled.",
    NaxalRelatedCases:
      "Incidents related to Naxal activities have been recorded.",
  };

  return (
    <div style={styles.statisticsContainer}>
      <h2 style={styles.title}>
        Crime Statistics for the Jharkhand State Police
      </h2>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>1. Dowry Deaths:</span>
        <span>{statisticsData.DowryDeaths}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>2. Witch Deaths:</span>
        <span>{statisticsData.WitchDeaths}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>3. Naxal Murders:</span>
        <span>{statisticsData.NaxalMurders}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>4. General Murders:</span>
        <span>{statisticsData.GeneralMurders}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>5. Bank Dacoities:</span>
        <span>{statisticsData.BankDacoities}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>6. Road Dacoities:</span>
        <span>{statisticsData.RoadDacoities}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>7. House Dacoities:</span>
        <span>{statisticsData.HouseDacoities}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>8. Bank Robberies:</span>
        <span>{statisticsData.BankRobberies}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>9. Road Robberies:</span>
        <span>{statisticsData.RoadRobberies}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>10. House Robberies:</span>
        <span>{statisticsData.HouseRobberies}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>11. Thefts:</span>
        <span>{statisticsData.Thefts}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>12. Riots:</span>
        <span>{statisticsData.Riots}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>13. Kidnappings for Ransom:</span>
        <span>{statisticsData.KidnappingsforRansom}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>14. Kidnappings:</span>
        <span>{statisticsData.Kidnappings}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>15. Rapes:</span>
        <span>{statisticsData.Rapes}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>16. Arms Act Violations:</span>
        <span>{statisticsData.ArmsActViolations}</span>
      </div>

      <div style={styles.statistic}>
        <span style={styles.statisticLabel}>17. Naxal Related Cases:</span>
        <span>{statisticsData.NaxalRelatedCases}</span>
      </div>
     
    </div>
  );
}

export default Statistics;