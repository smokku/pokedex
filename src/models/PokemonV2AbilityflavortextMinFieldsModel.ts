import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextMinFieldsModelBase } from "./PokemonV2AbilityflavortextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextMinFieldsModel */
export interface PokemonV2AbilityflavortextMinFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextMinFieldsModel */
export { selectFromPokemonV2AbilityflavortextMinFields, pokemonV2AbilityflavortextMinFieldsModelPrimitives, PokemonV2AbilityflavortextMinFieldsModelSelector } from "./PokemonV2AbilityflavortextMinFieldsModel.base"

/**
 * PokemonV2AbilityflavortextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2AbilityflavortextMinFieldsModel = PokemonV2AbilityflavortextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
