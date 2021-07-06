import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeStddevPopFieldsModelBase } from "./PokemonV2AbilitychangeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeStddevPopFieldsModel */
export interface PokemonV2AbilitychangeStddevPopFieldsModelType extends Instance<typeof PokemonV2AbilitychangeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeStddevPopFieldsModel */
export { selectFromPokemonV2AbilitychangeStddevPopFields, pokemonV2AbilitychangeStddevPopFieldsModelPrimitives, PokemonV2AbilitychangeStddevPopFieldsModelSelector } from "./PokemonV2AbilitychangeStddevPopFieldsModel.base"

/**
 * PokemonV2AbilitychangeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilitychangeStddevPopFieldsModel = PokemonV2AbilitychangeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
