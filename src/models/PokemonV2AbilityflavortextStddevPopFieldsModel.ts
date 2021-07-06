import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextStddevPopFieldsModelBase } from "./PokemonV2AbilityflavortextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextStddevPopFieldsModel */
export interface PokemonV2AbilityflavortextStddevPopFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextStddevPopFieldsModel */
export { selectFromPokemonV2AbilityflavortextStddevPopFields, pokemonV2AbilityflavortextStddevPopFieldsModelPrimitives, PokemonV2AbilityflavortextStddevPopFieldsModelSelector } from "./PokemonV2AbilityflavortextStddevPopFieldsModel.base"

/**
 * PokemonV2AbilityflavortextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilityflavortextStddevPopFieldsModel = PokemonV2AbilityflavortextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
