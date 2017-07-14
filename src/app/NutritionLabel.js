//React Stuff
import React, { PropTypes, Component } from 'react';

class NutritionLabel extends React.Component {

  render() {
    const tableStyle = {"image":{"width":"250px","float":"left","margin":"20px"},"body":{"fontSize":"small","lineHeight":"1.4"},"p":{"margin":"0"},"performance_facts":{"border":"1px solid black","margin":"20px","float":"left","width":"280px","padding":"0.5rem"},"performance_facts_table":{"borderCollapse":"collapse"},"performance_facts__title":{"fontWeight":"bold","fontSize":"2rem","margin":"0 0 0.25rem 0"},"performance_facts__header":{"borderBottom":"10px solid black","padding":"0 0 0.25rem 0","margin":"0 0 0.5rem 0"},"performance_facts__header_p":{"margin":"0"},"performance_facts__table":{"width":"100%"},"performance_facts__table__small":{"borderBottom":"1px solid #999","margin":"0 0 0.5rem 0"},"performance_facts__table__grid":{"margin":"0 0 0.5rem 0"},"performance_facts__table_thead_tr_th":{"border":"0"},"performance_facts__table__small_thead_tr_th":{"border":"0"},"performance_facts__table__grid_thead_tr_th":{"border":"0"},"performance_facts__table_thead_tr_td":{"border":"0"},"performance_facts__table__small_thead_tr_td":{"border":"0"},"performance_facts__table__grid_thead_tr_td":{"border":"0"},"performance_facts__table_th":{"fontWeight":"normal","textAlign":"left","padding":"0.25rem 0","borderTop":"1px solid black","whiteSpace":"nowrap"},"performance_facts__table__small_th":{"border":"0","padding":"0"},"performance_facts__table__grid_th":{"fontWeight":"normal","textAlign":"left","padding":"0.25rem 0","borderTop":"1px solid black","whiteSpace":"nowrap"},"performance_facts__table_td":{"fontWeight":"normal","textAlign":"left","padding":"0.25rem 0","borderTop":"1px solid black","whiteSpace":"nowrap"},"performance_facts__table__small_td":{"border":"0","padding":"0"},"performance_facts__table__grid_td":{"fontWeight":"normal","textAlign":"left","padding":"0.25rem 0","borderTop":"1px solid black","whiteSpace":"nowrap"},"performance_facts__table_td_last_child":{"textAlign":"right"},"performance_facts__table__small_td_last_child":{"textAlign":"left"},"performance_facts__table__grid_td_last_child":{"textAlign":"left"},"performance_facts__table__blank_cell":{"width":"1rem","borderTop":"0"},"performance_facts__table__small__blank_cell":{"width":"1rem","borderTop":"0"},"performance_facts__table__grid__blank_cell":{"width":"1rem","borderTop":"0"},"performance_facts__table__thick_row_th":{"borderTopWidth":"5px"},"performance_facts__table__small__thick_row_th":{"borderTopWidth":"5px"},"performance_facts__table__grid__thick_row_th":{"borderTopWidth":"5px"},"performance_facts__table__thick_row_td":{"borderTopWidth":"5px"},"performance_facts__table__small__thick_row_td":{"borderTopWidth":"5px"},"performance_facts__table__grid__thick_row_td":{"borderTopWidth":"5px"},"small_info":{"fontSize":"0.7rem"},"performance_facts__table__small_thead_tr":{"borderBottom":"1px solid black"},"performance_facts__table__grid_td_last_child__before":{"content":"\"•\"","fontWeight":"bold","margin":"0 0.25rem 0 0"},"text_center":{"textAlign":"center"},"thick_end":{"borderBottom":"10px solid black"},"thin_end":{"borderBottom":"1px solid black"}};
    return (
      <div style={tableStyle}>
        <img src="http://s.cdpn.io/3/NutritionFacts.gif" className="image" />
        <section className="performance-facts">
          <header className="performance-facts__header">
            <h1 className="performance-facts__title">Nutrition Facts</h1>
            <p>Serving Size 1/2 cup (about 82g)
            </p><p>Serving Per Container 8</p>
          </header>
          <table className="performance-facts__table">
            <thead>
              <tr>
                <th colSpan={3} className="small-info">
                  Amount Per Serving
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={2}>
                  <b>Calories</b>
                  200
                </th>
                <td>
                  Calories from Fat
                  130
                </td>
              </tr>
              <tr className="thick-row">
                <td colSpan={3} className="small-info">
                  <b>% Daily Value*</b>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <b>Total Fat</b>
                  14g
                </th>
                <td>
                  <b>22%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Saturated Fat
                  9g
                </th>
                <td>
                  <b>22%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Trans Fat
                  0g
                </th>
                <td>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <b>Cholesterol</b>
                  55mg
                </th>
                <td>
                  <b>18%</b>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <b>Sodium</b>
                  40mg
                </th>
                <td>
                  <b>2%</b>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <b>Total Carbohydrate</b>
                  17g
                </th>
                <td>
                  <b>6%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Dietary Fiber
                  1g
                </th>
                <td>
                  <b>4%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell">
                </td>
                <th>
                  Sugars
                  14g
                </th>
                <td>
                </td>
              </tr>
              <tr className="thick-end">
                <th colSpan={2}>
                  <b>Protein</b>
                  3g
                </th>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="performance-facts__table--grid">
            <tbody>
              <tr>
                <td colSpan={2}>
                  Vitamin A
                  10%
                </td>
                <td>
                  Vitamin C
                  0%
                </td>
              </tr>
              <tr className="thin-end">
                <td colSpan={2}>
                  Calcium
                  10%
                </td>
                <td>
                  Iron
                  6%
                </td>
              </tr>
            </tbody>
          </table>
          <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>
          <table className="performance-facts__table--small small-info">
            <thead>
              <tr>
                <td colSpan={2} />
                <th>Calories:</th>
                <th>2,000</th>
                <th>2,500</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={2}>Total Fat</th>
                <td>Less than</td>
                <td>65g</td>
                <td>80g</td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th>Saturated Fat</th>
                <td>Less than</td>
                <td>20g</td>
                <td>25g</td>
              </tr>
              <tr>
                <th colSpan={2}>Cholesterol</th>
                <td>Less than</td>
                <td>300mg</td>
                <td>300 mg</td>
              </tr>
              <tr>
                <th colSpan={2}>Sodium</th>
                <td>Less than</td>
                <td>2,400mg</td>
                <td>2,400mg</td>
              </tr>
              <tr>
                <th colSpan={3}>Total Carbohydrate</th>
                <td>300g</td>
                <td>375g</td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th colSpan={2}>Dietary Fiber</th>
                <td>25g</td>
                <td>30g</td>
              </tr>
            </tbody>
          </table>
          <p className="small-info">
            Calories per gram:
          </p>
          <p className="small-info text-center">
            Fat 9
            •
            Carbohydrate 4
            •
            Protein 4
          </p>
        </section>
      </div>
    );
  }
}

export default NutritionLabel;
