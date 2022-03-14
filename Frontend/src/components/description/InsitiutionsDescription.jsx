import React,{useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion/dist/framer-motion';
import {useInView} from 'react-intersection-observer';
import { Container } from 'react-bootstrap';
import Title from '../title/Title';
import ItemAxes from '../itemAxes/ItemAxes';
import { AXES_INFO_INVIRONMENT_ITEMS } from '../../mocks/axesInfoInvironment';
import './description.css'

function InstitutionsDescription() {
    
    const {ref, inView} = useInView();
    const animationLeft = useAnimation();

    useEffect(() => {    
        if(inView){
            animationLeft.start ({
                x:0,
                transition: {
                    type:"spring",
                    duration:1,
                    bounce:0.3
                }
            })

        }
        if(!inView){ 
            animationLeft.start({x:'-100vw'})
        }
    },[animationLeft, inView])

    return (
        <Container>
            <Title 
              type='violet-1'
              placeholder='Fortalecimiento Institucional'
              position='center'
              />
            <div>
              <motion.div 
                      initial={{x:'100vw'}}
                      animate={{x:0}}
                      transition= {{type:"spring", delay:0.5}} 
              >
                <Title 
                 type='violet-2'
                 placeholder='¿Qué trabajamos en el Eje de Fortalecimiento Institucional?' 
                 position='start'
                 />
              </motion.div>  
              <motion.p className='fortalecimiento my-4 justify-content-center  '
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition= {{delay:0.5 , duration:1.5,stiffness:5}}
              >Diseñamos recursos y herramientas para contribuir al fortalecimiento de todos los niveles de gobierno de cara al desarrollo y gestión de políticas e iniciativas sostenibles y transparentes. 
                Nuestro trabajo se orienta a modernizar las estructuras institucionales en pos de garantizar instancias de toma de decisiones representativas y cercanas a las necesidades de la ciudadanía.
                Los gobiernos locales son el punto de encuentro más cercano de la ciudadanía con la  estructura estatal y, por lo tanto, canal prioritario de las demandas sociales. En este sentido, la  necesidad de modernización de las estructuras, prácticas y procesos municipales es una  problemática de la agenda actual de los gobernantes y la ciudadanía, de cara a la mejora  constante de las políticas públicas.
              </motion.p>         
            </div>
            <div>
            <motion.div 
                 initial={{x:'100vw'}}
                 animate={{x:0}}
                 transition= {{type:"spring", delay:0.5}} 
              >
                <Title 
                 type='violet-2'
                 placeholder='Nuestras propuestas de trabajo son:' 
                 position='start'
                 />
              </motion.div> 
                <motion.p className='text-description my-4' 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition= {{delay:0.5 , duration:1.5,stiffness:5}}
                >
                Conformamos <strong>equipos interdisciplinados</strong>, con la unión de profesionales experimentados en la gestión pública,
                 el ámbito académico y el sector privado, para el  <strong>diseño de programas y capacitaciones</strong> específicas destinadas a <strong>agentes del sector público</strong> y a <strong>trabajadores del sector privado aplicados a la Responsabilidad Social Empresarial.</strong>
                </motion.p>
                <motion.div 
                   className='my-5'
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   transition= {{delay:1 , duration:1.5,stiffness:5}}
                >
                    {AXES_INFO_INVIRONMENT_ITEMS.map((info_items, i) => { return <ItemAxes infoItems={info_items} key={i}/>})}
                </motion.div>
                <div ref={ref}>
                    <motion.div 
                        animate={animationLeft} 
                    >
                        <Title 
                        type='violet-2'
                        placeholder='Nuestro compromiso con la sostenibilidad' 
                        position='start'
                        />
                    </motion.div> 
                    <motion.p className='text-description my-4 justify-content-center '
                    animate ={animationLeft} >
                        Todas las acciones del eje de Fortalecimiento Institucional se inscriben y guían por los lineamientos de los Objetivos de Desarrollo Sostenible plasmados en la Agenda 2030 de las Naciones Unidas:
                    </motion.p>
                    <motion.ul className='' animate={animationLeft}> 
                                <li><p className='text-description '><strong>-</strong> ODS 4 «Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos», </p></li>
                                <li><p className='text-description '><strong>-</strong> ODS 8 «promover el crecimiento económico inclusivo y sostenible, el empleo y el trabajo decente para todos»</p></li>
                                <li><p className='text-description '><strong>-</strong> ODS 16 «Promover sociedades justas, pacíficas e inclusivas».</p>
                                <ul>
                                    <li className='text-description '> <p><strong>.</strong> 16.5 Reducir considerablemente la corrupción y el soborno en todas sus formas; </p></li>
                                    <li className='text-description '> <p><strong>.</strong> Crear a todos los niveles instituciones eficaces y transparentes que rindan cuentas; </p></li>
                                    <li className='text-description '> <p><strong>.</strong> 16.7 Garantizar la adopción en todos los niveles de decisiones inclusivas, participativas y representativas que respondan a las necesidades; </p></li>
                                    <li className='text-description '> <p><strong>.</strong> 16.10 Garantizar el acceso público a la información y proteger las libertades fundamentales, de conformidad con las leyes nacionales y los acuerdos internacionales</p></li>
                                </ul>
                                </li>  
                    </motion.ul>
                </div>
            </div>
        </Container>
    )
};

export default InstitutionsDescription;
