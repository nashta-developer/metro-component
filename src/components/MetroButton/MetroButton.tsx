import React, {CSSProperties} from 'react'
import {data_color} from '../../types'
type PopperPlacement =
    | 'right'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end'
    | undefined
interface KtMenuProps {
    placement: PopperPlacement
    trigger: string
    flip: PopperPlacement
}
interface ButtonProps {
    id?: string
    data_kt_menu?: KtMenuProps
    onClick?: React.MouseEventHandler<HTMLElement>
    onMouseDown?: React.MouseEventHandler<HTMLElement>
    disabled?: boolean
    loading?: boolean
    light?: boolean
    activeLight?: boolean
    iconOnly?: boolean
    outline?: boolean
    loadingText?: string
    children?: React.ReactNode | React.ReactNode[]
    icon?: React.ReactNode
    style?: CSSProperties | undefined
    color?: data_color
    className?: string
    replaceAllClassName?: string
    size?: 'large' | 'small'
    type?: data_color
    htmlType?: 'submit' | 'button' | 'reset'
}

const MetroButton: React.FC<ButtonProps> = ({
                                                id,
                                                onClick,
                                                onMouseDown,
                                                loading,
                                                loadingText,
                                                children,
                                                className = '',
                                                light,
                                                color,
                                                activeLight,
                                                outline,
                                                type = 'primary',
                                                icon,
                                                size = '',
                                                iconOnly,
                                                style,
                                                disabled,
                                                htmlType = 'button',
                                                data_kt_menu,
                                                replaceAllClassName
                                            }) => {
    // btn btn-sm btn-icon btn-color-primary btn-active-light-primary
    const bt = `${outline ? 'btn-outline' : ''} btn${
        light ? '-light' : outline ? '-outline' : activeLight ? '-active-light' : ''
    }-${type}`
    const siz = {large: 'lg', small: 'sm'}
    // @ts-ignore
    const bs = size ? `btn-${siz[size]}` : ''
    const bc = color ? `btn-color-${color}` : ''
    const cns = `btn ${bs} ${iconOnly ? 'btn-icon' : ''} ${bc} ${bt} ${className}`.trim()
    const spinner = <span className='spinner-border spinner-border-sm align-middle ms-2' />
    const dkm = data_kt_menu
        ? {
            'data-kt-menu-trigger': data_kt_menu.trigger,
            'data-kt-menu-placement': data_kt_menu.placement,
            'data-kt-menu-flip': data_kt_menu.flip,
        }
        : {}
    const p = {
        id,
        'data-kt-indicator': loading ? 'on' : 'off',
        disabled: loading || disabled,
        className: replaceAllClassName || cns,
        style,
        onClick,
        onMouseDown,
        type: htmlType,
        ...dkm,
    }
    return (
        <>
            {/*@ts-ignore*/}
            <button {...p}>
                {iconOnly && (loading ? spinner : icon)}
                {!iconOnly &&
                    (!loading ? (
                        <>
                            {icon} <span className='indicator-label'>{children}</span>
                        </>
                    ) : (
                        <>
                            {icon}{' '}
                            <span className='indicator-progress'>
                {loadingText || 'Please Wait'}...{spinner}
              </span>
                        </>
                    ))}
            </button>
        </>
    )
}
// @ts-ignore
MetroButton.componentName = 'MetroButton'
export type { ButtonProps }
export default MetroButton

