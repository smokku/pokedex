import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityStddevSampFieldsModelBase } from "./PokemonV2AbilityStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityStddevSampFieldsModel */
export interface PokemonV2AbilityStddevSampFieldsModelType extends Instance<typeof PokemonV2AbilityStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityStddevSampFieldsModel */
export { selectFromPokemonV2AbilityStddevSampFields, pokemonV2AbilityStddevSampFieldsModelPrimitives, PokemonV2AbilityStddevSampFieldsModelSelector } from "./PokemonV2AbilityStddevSampFieldsModel.base"

/**
 * PokemonV2AbilityStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilityStddevSampFieldsModel = PokemonV2AbilityStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
