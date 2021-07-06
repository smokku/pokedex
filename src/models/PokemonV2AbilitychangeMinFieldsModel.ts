import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeMinFieldsModelBase } from "./PokemonV2AbilitychangeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeMinFieldsModel */
export interface PokemonV2AbilitychangeMinFieldsModelType extends Instance<typeof PokemonV2AbilitychangeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeMinFieldsModel */
export { selectFromPokemonV2AbilitychangeMinFields, pokemonV2AbilitychangeMinFieldsModelPrimitives, PokemonV2AbilitychangeMinFieldsModelSelector } from "./PokemonV2AbilitychangeMinFieldsModel.base"

/**
 * PokemonV2AbilitychangeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2AbilitychangeMinFieldsModel = PokemonV2AbilitychangeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
