import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextStddevPopFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextStddevPopFieldsModel */
export interface PokemonV2SupercontesteffectflavortextStddevPopFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextStddevPopFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextStddevPopFields, pokemonV2SupercontesteffectflavortextStddevPopFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextStddevPopFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2SupercontesteffectflavortextStddevPopFieldsModel = PokemonV2SupercontesteffectflavortextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
