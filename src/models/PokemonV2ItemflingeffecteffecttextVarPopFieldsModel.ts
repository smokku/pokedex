import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextVarPopFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextVarPopFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextVarPopFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextVarPopFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextVarPopFields, pokemonV2ItemflingeffecteffecttextVarPopFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextVarPopFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextVarPopFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemflingeffecteffecttextVarPopFieldsModel = PokemonV2ItemflingeffecteffecttextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
