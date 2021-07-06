import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeVarianceFieldsModelBase } from "./PokemonV2MovemetastatchangeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeVarianceFieldsModel */
export interface PokemonV2MovemetastatchangeVarianceFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeVarianceFieldsModel */
export { selectFromPokemonV2MovemetastatchangeVarianceFields, pokemonV2MovemetastatchangeVarianceFieldsModelPrimitives, PokemonV2MovemetastatchangeVarianceFieldsModelSelector } from "./PokemonV2MovemetastatchangeVarianceFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetastatchangeVarianceFieldsModel = PokemonV2MovemetastatchangeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
