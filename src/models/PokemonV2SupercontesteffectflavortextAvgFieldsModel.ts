import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextAvgFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextAvgFieldsModel */
export interface PokemonV2SupercontesteffectflavortextAvgFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextAvgFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextAvgFields, pokemonV2SupercontesteffectflavortextAvgFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextAvgFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2SupercontesteffectflavortextAvgFieldsModel = PokemonV2SupercontesteffectflavortextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
