import { Search, Volume2, Zap } from "lucide-react";

export function CareerVisual() {
  return (
    <div className="career-visual project-visual" aria-hidden="true">
      <span className="visual-caption">INTERFACE STUDY / CAREERCONNECT</span>
      <div className="career-browser">
        <div className="browser-chrome">
          <span>
            <i />
            <i />
            <i />
          </span>
          <span>careerconnect / discover</span>
          <span>↗</span>
        </div>
        <div className="career-content">
          <div className="career-nav">
            <b>
              <span className="mini-symbol">c</span> CareerConnect
              <span className="brand-dot">.</span>
            </b>
            <span>
              Find jobs <span className="career-nav-about">About us</span>
            </span>
            <span className="mini-signin">Sign in ↗</span>
          </div>
          <span className="career-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
          <h4>
            Good work.
            <br />
            <em>Great possibilities.</em>
          </h4>
          <p>Find a role that moves you forward.</p>
          <div className="fake-search">
            <Search size={12} />
            <span>Job title or keyword</span>
            <span className="fake-search-button">Find a job ↗</span>
          </div>
          <div className="mini-jobs">
            <div>
              <span className="job-icon">↗</span>
              <span>
                <b>Frontend Developer</b>
                <small>Engineering · Remote</small>
              </span>
              <span>↗</span>
            </div>
            <div>
              <span className="job-icon purple">✳</span>
              <span>
                <b>Product Designer</b>
                <small>Design · Kolkata</small>
              </span>
              <span>↗</span>
            </div>
          </div>
        </div>
      </div>
      <span className="visual-corner">FROM DISCOVERY TO OPPORTUNITY ↗</span>
    </div>
  );
}
export function EnergyVisual() {
  return (
    <div className="energy-visual project-visual" aria-hidden="true">
      <div className="energy-heading">
        <span>
          <Zap size={16} /> ENERGY / EXCHANGE
        </span>
        <span>SOROBAN</span>
      </div>
      <div className="energy-art">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="energy-hub">
          <Zap size={45} strokeWidth={1.25} />
        </div>
        <span className="energy-point point-a">+ 12 kWh</span>
        <span className="energy-point point-b">STELLAR</span>
        <span className="energy-point point-c">↗ LIST / BUY</span>
        <span className="energy-spark spark-a" />
        <span className="energy-spark spark-b" />
      </div>
      <div className="energy-footer">
        <span>DECENTRALIZED BY DESIGN</span>
        <span>CONTRACT EXPLORATION ↗</span>
      </div>
    </div>
  );
}
export function DictionaryVisual() {
  return (
    <div className="dictionary-visual project-visual" aria-hidden="true">
      <div className="dictionary-top">
        <span>WORDS OPEN WORLDS.</span>
        <span>Aa ↗</span>
      </div>
      <div className="dictionary-word">
        curiosity
        <span>
          <span>/ˌkjʊəriˈɒsəti/</span>
          <Volume2 size={20} />
        </span>
      </div>
      <div className="dictionary-definition">
        <i>noun</i>
        <p>
          A strong desire to know
          <br />
          or learn something.
        </p>
      </div>
      <div className="dictionary-bottom">
        <span>THE EVERYDAY DICTIONARY</span>
        <span>01 / ∞</span>
      </div>
    </div>
  );
}
