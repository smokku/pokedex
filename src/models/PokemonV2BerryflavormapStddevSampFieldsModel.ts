import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapStddevSampFieldsModelBase } from "./PokemonV2BerryflavormapStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapStddevSampFieldsModel */
export interface PokemonV2BerryflavormapStddevSampFieldsModelType extends Instance<typeof PokemonV2BerryflavormapStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapStddevSampFieldsModel */
export { selectFromPokemonV2BerryflavormapStddevSampFields, pokemonV2BerryflavormapStddevSampFieldsModelPrimitives, PokemonV2BerryflavormapStddevSampFieldsModelSelector } from "./PokemonV2BerryflavormapStddevSampFieldsModel.base"

/**
 * PokemonV2BerryflavormapStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2BerryflavormapStddevSampFieldsModel = PokemonV2BerryflavormapStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
