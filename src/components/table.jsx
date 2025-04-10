import { useParams } from "react-router-dom";
import Data from '../DATA/data.json';

const SpeakerSpecifications = () => {

  const { id } = useParams();
    const item = Data.find(product => product.id.toString() == id);


  return (
    <>
      <div className="tableC">
        <table className="tablep">
          <thead style={{borderBottom: "2px dashed orange"}}>
            <tr>
              <th>General</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="column-spacing">Speaker Size</td><td className="column-spacing">{item.SpeakerSize}</td></tr>
            <tr><td className="column-spacing">Driver Design</td><td className="column-spacing">{item.DriverDesign}</td></tr>
            <tr><td className="column-spacing">Woofer Design</td><td className="column-spacing">{item.WooferDesign}</td></tr>
            <tr><td className="column-spacing">Woofer Material</td><td className="column-spacing">{item.WooferMaterial}</td></tr>
            <tr><td className="column-spacing">Woofer Surround</td><td className="column-spacing">{item.WooferSurround}</td></tr>
            <tr><td className="column-spacing">Tweeter Design</td><td className="column-spacing">{item.TweeterDesign}</td></tr>
            <tr><td className="column-spacing">Tweeter Material</td><td className="column-spacing">{item.TweeterMaterial}</td></tr>
            <tr><td className="column-spacing">Impedance (Ohms)</td><td className="column-spacing">4</td></tr>
            <tr><td className="column-spacing">Weather-resistant</td><td className="column-spacing">No</td></tr>
            <tr><td className="column-spacing">Grilles Included</td><td className="column-spacing">Black, Metal mesh, Plastic frame</td></tr>
            <tr><td className="column-spacing">Parts Warranty</td><td className="column-spacing">1 Year</td></tr>
            <tr><td className="column-spacing">Labor Warranty</td><td className="column-spacing">1 Year</td></tr>
          </tbody>
          <thead style={{borderBottom: "2px dashed orange"}}>
            <tr>
              <th>Specifications</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="column-spacing">Sensitivity (1W at 1 meter)</td><td className="column-spacing">87.25</td></tr>
            <tr><td className="column-spacing">Sensitivity at 2.83 volts</td><td className="column-spacing">91.3</td></tr>
            <tr><td className="column-spacing">Frequency Response</td><td className="column-spacing">60 - 20k Hz</td></tr>
            <tr><td className="column-spacing">Maximum RMS Wattage</td><td className="column-spacing">60</td></tr>
            <tr><td className="column-spacing">Peak Power Handling (Watts)</td><td className="column-spacing">120</td></tr>
            <tr><td className="column-spacing">Top-mount Depth (Inches)</td><td className="column-spacing">2 9/16</td></tr>
            <tr><td className="column-spacing">Cutout Diameter or Length (inches)</td><td className="column-spacing">5 9/16</td></tr>
            <tr><td className="column-spacing">Mounting Height (Inches)</td><td className="column-spacing">0.38</td></tr>
            <tr><td className="column-spacing">Frame Width</td><td className="column-spacing">6.482</td></tr>
            <tr><td className="column-spacing">Frame Length</td><td className="column-spacing">6.482</td></tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .column-spacing {
          padding: 8px 16px;
        }
      `}</style>
    </>
  );
};

export default SpeakerSpecifications;
