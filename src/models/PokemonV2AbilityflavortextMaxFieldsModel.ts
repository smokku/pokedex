import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextMaxFieldsModelBase } from "./PokemonV2AbilityflavortextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextMaxFieldsModel */
export interface PokemonV2AbilityflavortextMaxFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextMaxFieldsModel */
export { selectFromPokemonV2AbilityflavortextMaxFields, pokemonV2AbilityflavortextMaxFieldsModelPrimitives, PokemonV2AbilityflavortextMaxFieldsModelSelector } from "./PokemonV2AbilityflavortextMaxFieldsModel.base"

/**
 * PokemonV2AbilityflavortextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2AbilityflavortextMaxFieldsModel = PokemonV2AbilityflavortextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
