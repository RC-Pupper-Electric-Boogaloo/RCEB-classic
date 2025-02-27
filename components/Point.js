import Matter from 'matter-js'
import React from 'react'
import { View, Image } from 'react-native'

const Point = (props) => {
    const diameter = props.body.circleRadius * 2;

    const xBody = props.body.position.x - props.body.circleRadius;
    const yBody = props.body.position.y - props.body.circleRadius;

    const color = props.color;

    return (
        <Image
            source={require('../assets/Point.png')}
            style={{
                position: 'absolute',
                left: xBody,
                top: yBody,
                width: diameter,
                height: diameter,
                resizeMode: 'stretch',
            }}
        />
    );
}

export default (world, color, pos, size) => {
    const initialPoint = Matter.Bodies.circle(
        pos.x,
        pos.y,
        size.width / 2,
        { label: 'Point' }
    )
    Matter.World.add(world, initialPoint)

    return {
        body: initialPoint,
        color,
        pos,
        renderer: <Point />
    }
}
