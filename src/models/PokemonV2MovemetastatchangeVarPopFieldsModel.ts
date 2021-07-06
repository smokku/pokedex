import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeVarPopFieldsModelBase } from "./PokemonV2MovemetastatchangeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeVarPopFieldsModel */
export interface PokemonV2MovemetastatchangeVarPopFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeVarPopFieldsModel */
export { selectFromPokemonV2MovemetastatchangeVarPopFields, pokemonV2MovemetastatchangeVarPopFieldsModelPrimitives, PokemonV2MovemetastatchangeVarPopFieldsModelSelector } from "./PokemonV2MovemetastatchangeVarPopFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetastatchangeVarPopFieldsModel = PokemonV2MovemetastatchangeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
