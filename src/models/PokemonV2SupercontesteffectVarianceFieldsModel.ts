import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectVarianceFieldsModelBase } from "./PokemonV2SupercontesteffectVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectVarianceFieldsModel */
export interface PokemonV2SupercontesteffectVarianceFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectVarianceFieldsModel */
export { selectFromPokemonV2SupercontesteffectVarianceFields, pokemonV2SupercontesteffectVarianceFieldsModelPrimitives, PokemonV2SupercontesteffectVarianceFieldsModelSelector } from "./PokemonV2SupercontesteffectVarianceFieldsModel.base"

/**
 * PokemonV2SupercontesteffectVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2SupercontesteffectVarianceFieldsModel = PokemonV2SupercontesteffectVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
