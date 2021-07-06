import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameStddevSampFieldsModelBase } from "./PokemonV2BerryflavornameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameStddevSampFieldsModel */
export interface PokemonV2BerryflavornameStddevSampFieldsModelType extends Instance<typeof PokemonV2BerryflavornameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameStddevSampFieldsModel */
export { selectFromPokemonV2BerryflavornameStddevSampFields, pokemonV2BerryflavornameStddevSampFieldsModelPrimitives, PokemonV2BerryflavornameStddevSampFieldsModelSelector } from "./PokemonV2BerryflavornameStddevSampFieldsModel.base"

/**
 * PokemonV2BerryflavornameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2BerryflavornameStddevSampFieldsModel = PokemonV2BerryflavornameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
