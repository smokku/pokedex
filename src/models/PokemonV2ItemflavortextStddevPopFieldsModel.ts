import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextStddevPopFieldsModelBase } from "./PokemonV2ItemflavortextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextStddevPopFieldsModel */
export interface PokemonV2ItemflavortextStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemflavortextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextStddevPopFieldsModel */
export { selectFromPokemonV2ItemflavortextStddevPopFields, pokemonV2ItemflavortextStddevPopFieldsModelPrimitives, PokemonV2ItemflavortextStddevPopFieldsModelSelector } from "./PokemonV2ItemflavortextStddevPopFieldsModel.base"

/**
 * PokemonV2ItemflavortextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemflavortextStddevPopFieldsModel = PokemonV2ItemflavortextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
