import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextStddevFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextStddevFieldsModel */
export interface PokemonV2SupercontesteffectflavortextStddevFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextStddevFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextStddevFields, pokemonV2SupercontesteffectflavortextStddevFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextStddevFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2SupercontesteffectflavortextStddevFieldsModel = PokemonV2SupercontesteffectflavortextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
