import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextStddevFieldsModelBase } from "./PokemonV2AbilityflavortextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextStddevFieldsModel */
export interface PokemonV2AbilityflavortextStddevFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextStddevFieldsModel */
export { selectFromPokemonV2AbilityflavortextStddevFields, pokemonV2AbilityflavortextStddevFieldsModelPrimitives, PokemonV2AbilityflavortextStddevFieldsModelSelector } from "./PokemonV2AbilityflavortextStddevFieldsModel.base"

/**
 * PokemonV2AbilityflavortextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2AbilityflavortextStddevFieldsModel = PokemonV2AbilityflavortextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
