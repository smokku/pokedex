import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaVarianceFieldsModelBase } from "./PokemonV2MovemetaVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaVarianceFieldsModel */
export interface PokemonV2MovemetaVarianceFieldsModelType extends Instance<typeof PokemonV2MovemetaVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaVarianceFieldsModel */
export { selectFromPokemonV2MovemetaVarianceFields, pokemonV2MovemetaVarianceFieldsModelPrimitives, PokemonV2MovemetaVarianceFieldsModelSelector } from "./PokemonV2MovemetaVarianceFieldsModel.base"

/**
 * PokemonV2MovemetaVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetaVarianceFieldsModel = PokemonV2MovemetaVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
