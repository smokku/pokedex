import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameVarPopFieldsModelBase } from "./PokemonV2PokemonshapenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameVarPopFieldsModel */
export interface PokemonV2PokemonshapenameVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameVarPopFieldsModel */
export { selectFromPokemonV2PokemonshapenameVarPopFields, pokemonV2PokemonshapenameVarPopFieldsModelPrimitives, PokemonV2PokemonshapenameVarPopFieldsModelSelector } from "./PokemonV2PokemonshapenameVarPopFieldsModel.base"

/**
 * PokemonV2PokemonshapenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonshapenameVarPopFieldsModel = PokemonV2PokemonshapenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
