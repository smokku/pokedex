import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboMaxFieldsModelBase } from "./PokemonV2SupercontestcomboMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboMaxFieldsModel */
export interface PokemonV2SupercontestcomboMaxFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboMaxFieldsModel */
export { selectFromPokemonV2SupercontestcomboMaxFields, pokemonV2SupercontestcomboMaxFieldsModelPrimitives, PokemonV2SupercontestcomboMaxFieldsModelSelector } from "./PokemonV2SupercontestcomboMaxFieldsModel.base"

/**
 * PokemonV2SupercontestcomboMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2SupercontestcomboMaxFieldsModel = PokemonV2SupercontestcomboMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
