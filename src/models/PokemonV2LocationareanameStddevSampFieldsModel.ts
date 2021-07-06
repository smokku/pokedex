import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameStddevSampFieldsModelBase } from "./PokemonV2LocationareanameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameStddevSampFieldsModel */
export interface PokemonV2LocationareanameStddevSampFieldsModelType extends Instance<typeof PokemonV2LocationareanameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameStddevSampFieldsModel */
export { selectFromPokemonV2LocationareanameStddevSampFields, pokemonV2LocationareanameStddevSampFieldsModelPrimitives, PokemonV2LocationareanameStddevSampFieldsModelSelector } from "./PokemonV2LocationareanameStddevSampFieldsModel.base"

/**
 * PokemonV2LocationareanameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationareanameStddevSampFieldsModel = PokemonV2LocationareanameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
