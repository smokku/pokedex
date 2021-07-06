import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeStddevFieldsModelBase } from "./PokemonV2AbilitychangeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeStddevFieldsModel */
export interface PokemonV2AbilitychangeStddevFieldsModelType extends Instance<typeof PokemonV2AbilitychangeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeStddevFieldsModel */
export { selectFromPokemonV2AbilitychangeStddevFields, pokemonV2AbilitychangeStddevFieldsModelPrimitives, PokemonV2AbilitychangeStddevFieldsModelSelector } from "./PokemonV2AbilitychangeStddevFieldsModel.base"

/**
 * PokemonV2AbilitychangeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2AbilitychangeStddevFieldsModel = PokemonV2AbilitychangeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
