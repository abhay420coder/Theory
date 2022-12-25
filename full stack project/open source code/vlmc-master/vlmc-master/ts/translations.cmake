#
# VLMC build system
# Authors: Ludovic Fauvet <etix@vlmc.org>
#          Rohit Yadav <rohityadav89@gmail.com>
#          Hugo Beauzée-Luyssen <hugo@beauzee.fr>
#

function(vlmc_get_ts_files VLMC_TS_FILES_OUT)
    SET(ALL_LANGUAGES
            ca
            cs
            de
            es
            eu
            fr
            gl
            el
            hu
            it
            ja
            nl
            pl
            pt
            ro
            ru
            sl
            sk
            sv
            ta
            te
            tr
            uk
            zh
       )

    ## Check if user has provided specific LANGS option
    if(NOT DEFINED LANGS)
        SET(VLMC_USING_LANGUAGES ${ALL_LANGUAGES} CACHE STRING "Using translations" FORCE)
    else(NOT DEFINED LANGS)
        IF(NOT LANGS)
            SET(VLMC_USING_LANGUAGES "" CACHE STRING "Using translations" FORCE)
        ELSEIF(LANGS STREQUAL *)
            SET(VLMC_USING_LANGUAGES ${ALL_LANGUAGES} CACHE STRING "Using translations" FORCE)
        ELSE(NOT LANGS)
            STRING(REGEX MATCHALL [a-zA-Z_]+
                   langs1 ${LANGS})
            SET(VLMC_USING_LANGUAGES ${langs1} CACHE STRING "Using translations" FORCE)
        ENDIF(NOT LANGS)
    endif(NOT DEFINED LANGS)

    ## Display what translations files will be processed
    MESSAGE(STATUS "Translations: ${VLMC_USING_LANGUAGES}")

    ## Collect all translations files that are to be processed
    FOREACH(LANGUAGE ${VLMC_USING_LANGUAGES})
        FILE(GLOB temp_TS ${CMAKE_SOURCE_DIR}/ts/vlmc*${LANGUAGE}*.ts)
        LIST(APPEND VLMC_TS_FILES ${temp_TS})
    ENDFOREACH()
    set(${VLMC_TS_FILES_OUT} ${VLMC_TS_FILES} PARENT_SCOPE)
endfunction()

function(vlmc_get_ts VLMC_QM_FILES_OUT)
    find_package(Qt5LinguistTools)
    if(Qt5LinguistTools_FOUND)
        vlmc_get_ts_files(vlmc_TS)

        ## Wraps the collected translations
        qt5_add_translation(VLMC_QM_FILES ${vlmc_TS})
        set(${VLMC_QM_FILES_OUT} ${VLMC_QM_FILES} PARENT_SCOPE)
    else()
        MESSAGE(WARNING "VLMC could not find Qt5 linguist tools. i18n support will be disabled.")
        set(${VLMC_QM_FILES_OUT} "" PARENT_SCOPE)
    endif()
endfunction()

function(vlmc_create_ts_resources VLMC_QMS_IN VLMC_QRC_FILE_IN)
    set(QRC_SRC "<RCC><qresource prefix=\"/ts\">")
    foreach(qm ${VLMC_QMS_IN})
        get_filename_component(QM_NAME ${qm} NAME)
        set(QRC_SRC "${QRC_SRC} <file alias=\"${QM_NAME}\">${qm}</file>")
    endforeach()
    set(QRC_SRC "${QRC_SRC}</qresource></RCC>")
    file(WRITE ${VLMC_QRC_FILE_IN} ${QRC_SRC})
endfunction()
