import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeStddevSampFieldsModelBase } from "./PokemonV2AbilitychangeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeStddevSampFieldsModel */
export interface PokemonV2AbilitychangeStddevSampFieldsModelType extends Instance<typeof PokemonV2AbilitychangeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeStddevSampFieldsModel */
export { selectFromPokemonV2AbilitychangeStddevSampFields, pokemonV2AbilitychangeStddevSampFieldsModelPrimitives, PokemonV2AbilitychangeStddevSampFieldsModelSelector } from "./PokemonV2AbilitychangeStddevSampFieldsModel.base"

/**
 * PokemonV2AbilitychangeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilitychangeStddevSampFieldsModel = PokemonV2AbilitychangeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
