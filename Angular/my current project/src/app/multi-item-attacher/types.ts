export interface MultiItemAttacherProps {
    // attachment
    attachmentTitle: string,
    attachmentFilterBy: string,
    attachmentDisplay: string,
    attachmentDescription: string,
    attachmentProvider: Function | null,
    attachmentPagination: boolean,

    // attachables
    attachableTitle: string,
    attachableDisplay: string,
    attachableDescription: string,
    attachableFilterBy: string,
    attachableProvider: Function | null,
    attachablePagination: boolean,
    attachmentKey: string,
    attachableHasIcon?: boolean,
    attachableIcon?: string,
    attachableIconPath?: string,
    attachableIconExt?: string,
    canViewAttached?: boolean,
    showAttachment?: Function | null,
    canAddCustomAttachment?: boolean,
    customAttachmentKey?: string,
    customAttachmentProvider?: Function | null
}