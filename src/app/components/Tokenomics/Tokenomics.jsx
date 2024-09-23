import './Tokenomics.css';


export default function Tokenomics() {
    return (
        <div className='content-center'>
            <div className="margin-bottom is-large pt-40">
                <h2 className="center-text">Tokenomics</h2>
            </div>
            <div className="container-tokenomics">
                <div className="grid-badges">
                    <div className="badge is-wide">
                        <div>
                            <div className="text-block">
                                <strong>CONTRACT ADDRESS:</strong>
                            </div>
                            <div className="text-block">4sp2EUDrQf46rZun6sYAWzjrXwUpx2T3njuoKmV766RJ</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className="badge">
                            <div className="text-block">
                                <strong>TICKER:</strong> $WGLY
                            </div>
                        </div>
                        <div className="badge">
                            <div className="text-block">
                                <strong>TAX :</strong> 0
                            </div>
                        </div>
                        <div className="badge">
                            <div className="text-block">
                                <strong>LP:</strong> BURNED
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
