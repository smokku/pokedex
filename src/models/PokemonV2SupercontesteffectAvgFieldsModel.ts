import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectAvgFieldsModelBase } from "./PokemonV2SupercontesteffectAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectAvgFieldsModel */
export interface PokemonV2SupercontesteffectAvgFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectAvgFieldsModel */
export { selectFromPokemonV2SupercontesteffectAvgFields, pokemonV2SupercontesteffectAvgFieldsModelPrimitives, PokemonV2SupercontesteffectAvgFieldsModelSelector } from "./PokemonV2SupercontesteffectAvgFieldsModel.base"

/**
 * PokemonV2SupercontesteffectAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2SupercontesteffectAvgFieldsModel = PokemonV2SupercontesteffectAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
