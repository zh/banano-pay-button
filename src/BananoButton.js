import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react';
import { getSendURI } from 'banano-uri-generator';
import { banToRaw } from 'banano-unit-converter';

class BananoButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: true,
      showQR: false,
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const {
      isScriptLoaded,
      isScriptLoadSucceed
    } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true, showQR: false });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      isScriptLoaded,
      isScriptLoadSucceed,
    } = nextProps;

    const isLoadedButWasntLoadedBefore =
      !this.state.showButton &&
      !this.props.isScriptLoaded &&
      isScriptLoaded;

    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true, showQR: false });
      }
    }
  }

  render() {
    const {
      data
    } = this.props;

    const styles = {
      color: data.qrFg,
      marginLeft: 8
    }

    const {
      showButton,
      showQR,
    } = this.state;

    const onPayment = () => {
      this.setState({ showButton: false, showQR: true });
    }

    const amount = data.amount ? banToRaw(data.amount) : '',
          label = data.label ? data.label : '',
          bananoURI = getSendURI(data.address, amount, label);

    return (
      <div>
        {showButton && <button onClick={onPayment}>
          {data.title ? data.title : 'Pay with BAN'}
          </button>}
            {showQR && <QRCode
                      value={bananoURI}
                      size={data.qrSize ? data.qrSize : 128}
                      level={data.qrLevel ? data.qrLevel : 'M'}
                      fgColor={data.qrFg}
                      bgColor={data.qrBg}
                      includeMargin={true}
                />}
            {showQR && data.info && <div style={ styles }>
              <div><small>Address: {data.address}</small></div>
              {data.amount && <div><small>Amount: {data.amount}</small></div>}
              {data.label && <div><small>Label: {data.label}</small></div>}
            </div>}
      </div>
    );
  }
}

// maybe QR generator here...
export default BananoButton;
