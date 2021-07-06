import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessStddevSampFieldsModelBase } from "./PokemonV2BerryfirmnessStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessStddevSampFieldsModel */
export interface PokemonV2BerryfirmnessStddevSampFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessStddevSampFieldsModel */
export { selectFromPokemonV2BerryfirmnessStddevSampFields, pokemonV2BerryfirmnessStddevSampFieldsModelPrimitives, PokemonV2BerryfirmnessStddevSampFieldsModelSelector } from "./PokemonV2BerryfirmnessStddevSampFieldsModel.base"

/**
 * PokemonV2BerryfirmnessStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2BerryfirmnessStddevSampFieldsModel = PokemonV2BerryfirmnessStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
