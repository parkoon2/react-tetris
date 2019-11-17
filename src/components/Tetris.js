import React from 'react'

import { createStage } from '../gameHelpers'

// Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import { StyledTetris, StyledTetrisWrapper } from './styled/StyledTetris'


const Tetris = () => {



    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <aside>
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                    </div>
                    <StartButton />
                </aside>
            <Stage stage={createStage()}/>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris