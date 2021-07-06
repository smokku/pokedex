import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextStddevFieldsModelBase } from "./PokemonV2ItemflavortextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextStddevFieldsModel */
export interface PokemonV2ItemflavortextStddevFieldsModelType extends Instance<typeof PokemonV2ItemflavortextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextStddevFieldsModel */
export { selectFromPokemonV2ItemflavortextStddevFields, pokemonV2ItemflavortextStddevFieldsModelPrimitives, PokemonV2ItemflavortextStddevFieldsModelSelector } from "./PokemonV2ItemflavortextStddevFieldsModel.base"

/**
 * PokemonV2ItemflavortextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemflavortextStddevFieldsModel = PokemonV2ItemflavortextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
