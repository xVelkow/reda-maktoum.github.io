import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "Components/hero/Background.scss"
const Background = () =>{
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    return(
        <Particles
            id="particles__background"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#212121",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 300,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#9BA3EB",
                    },
                    links: {
                        color: "#C8CCF4",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 45,
                    },
                    opacity: {
                        value: .6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
                responsive: [
                    {
                        breakpoint: 768,
                        options: {
                            maxParticles: 0,
                            color: '#48F2E3',
                            connectParticles: false
                        }
                    },
                    {
                        breakpoint: 425,
                        options: {
                            maxParticles: 100,
                            connectParticles: true
                        }
                    },
                    {
                        breakpoint: 320,
                        options: {
                            maxParticles: 0 
                        }
                    }
                ]
            }}
        />
    )
}
export default Background